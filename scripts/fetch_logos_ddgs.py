import os
import urllib.request
import re
import time
from duckduckgo_search import DDGS

companies = [
    "Sinercon construtora Joinville",
    "Alicerce empreendimentos Joinville",
    "Construtora medeli Joinville",
    "Construtora Stein Joinville",
    "Embracol Construtora Joinville",
    "Xpcon Empreendimentos Joinville",
    "Construtora inovar Joinville",
    "Construtora Viplan Joinville",
    "isensee empreendimentos Joinville",
    "GART EMPREENDIMENTOS Joinville",
    "GRUPO ESTRUTURA Joinville",
    "TORRESANI Joinville",
    "TRAPP FERREIRA Joinville",
    "COPAS ENGENHARIA Joinville",
    "GRANADA CONSTRUTORA Joinville"
]

output_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "logos")
os.makedirs(output_dir, exist_ok=True)

ddgs = DDGS()

def download_logo(company):
    print(f"Searching logo for {company}...")
    safe_name = re.sub(r'[^a-zA-Z0-9]', '_', company.replace(' Joinville', '').lower()).strip('_')
    output_path = os.path.join(output_dir, f"{safe_name}.png")
    
    # Check if already downloaded
    if os.path.exists(output_path):
        print("  -> Already exists")
        return True
        
    try:
        results = ddgs.images(
            keywords=f'"{company.replace(" Joinville", "")}" logo',
            max_results=3,
        )
        if not results:
            print(f"  [FAILED] No images found for {company}")
            return False
            
        for res in results:
            image_url = res.get("image")
            if not image_url: continue
            print(f"  -> Found image URL: {image_url}")
            
            req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
            try:
                with urllib.request.urlopen(req, timeout=10) as response:
                    if response.getcode() == 200:
                        with open(output_path, 'wb') as f:
                            f.write(response.read())
                        print(f"  [SUCCESS] Saved to {output_path}")
                        return True
            except Exception as e:
                print(f"  -> Error downloading image: {e}")
                continue
                
    except Exception as e:
        print(f"  [ERROR] DDGS failed: {e}")
        
    print(f"  [FAILED] All attempts failed for {company}")
    return False

for company in companies:
    download_logo(company)
    time.sleep(5) # wait 5 seconds to avoid ratelimit!
