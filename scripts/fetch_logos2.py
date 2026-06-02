import urllib.request
import os
import re

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

def generate_domains(company):
    clean = re.sub(r'[^a-zA-Z0-9 ]', '', company.lower()).strip()
    words = clean.split()
    domains = []
    
    # Just the words joined
    domains.append("".join(words) + ".com.br")
    domains.append("".join(words) + ".com")
    
    if len(words) > 1:
        # First word only
        domains.append(words[0] + ".com.br")
        domains.append(words[0] + ".com")
        
        # Second word only if first is 'construtora' or 'grupo'
        if words[0] in ['construtora', 'grupo']:
            domains.append(words[1] + ".com.br")
            domains.append(words[1] + ".com")
            
        # First word + 'construtora'
        if 'construtora' not in words:
            domains.append(words[0] + "construtora.com.br")
            
    return list(dict.fromkeys(domains)) # unique

def download_logo(company):
    print(f"Trying to find logo for {company}...")
    domains = generate_domains(company)
    
    safe_name = re.sub(r'[^a-zA-Z0-9]', '_', company.lower())
    output_path = os.path.join(output_dir, f"{safe_name}.png")
    
    for domain in domains:
        logo_url = f"https://logo.clearbit.com/{domain}?size=200"
        req = urllib.request.Request(logo_url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as response:
                if response.getcode() == 200:
                    with open(output_path, 'wb') as f:
                        f.write(response.read())
                    print(f"  [SUCCESS] {domain}")
                    return True
        except Exception:
            pass
            
    print(f"  [FAILED] Could not find logo for {company}")
    return False

for company in companies:
    download_logo(company)
