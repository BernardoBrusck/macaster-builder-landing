import urllib.request
import urllib.parse
import json
import re
import os
import time

companies = [
    "Sinercon construtora",
    "Alicerce empreendimentos",
    "Construtora medeli",
    "Construtora Stein",
    "Embracol Construtora",
    "Xpcon Empreendimentos",
    "Construtora inovar",
    "Construtora Viplan",
    "isensee empreendimentos",
    "GART EMPREENDIMENTOS",
    "GRUPO ESTRUTURA",
    "TORRESANI",
    "TRAPP FERREIRA",
    "COPAS ENGENHARIA",
    "GRANADA CONSTRUTORA"
]

output_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "logos")
os.makedirs(output_dir, exist_ok=True)

def get_domain(company):
    # Try using duckduckgo HTML
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(company + ' site oficial')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Extract first href from search results
            match = re.search(r'class="result__url" href="([^"]+)"', html)
            if match:
                href = match.group(1)
                if href.startswith('//duckduckgo.com/l/?uddg='):
                    href = urllib.parse.unquote(href.split('uddg=')[1].split('&')[0])
                # Extract domain
                domain = urllib.parse.urlparse(href).netloc
                if domain.startswith('www.'):
                    domain = domain[4:]
                return domain
    except Exception as e:
        print(f"Error searching {company}: {e}")
    return None

def download_logo(company):
    print(f"Searching domain for {company}...")
    domain = get_domain(company)
    if not domain:
        print(f"  -> Domain not found for {company}")
        return
    
    print(f"  -> Found domain: {domain}")
    
    # Try downloading from clearbit
    logo_url = f"https://logo.clearbit.com/{domain}"
    req = urllib.request.Request(logo_url, headers={'User-Agent': 'Mozilla/5.0'})
    
    safe_name = re.sub(r'[^a-zA-Z0-9]', '_', company.lower())
    output_path = os.path.join(output_dir, f"{safe_name}.png")
    
    try:
        with urllib.request.urlopen(req) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        print(f"  -> Logo downloaded: {output_path}")
    except Exception as e:
        print(f"  -> Error downloading logo from Clearbit ({domain}): {e}")

for company in companies:
    download_logo(company)
    time.sleep(1) # Be nice to search engine
