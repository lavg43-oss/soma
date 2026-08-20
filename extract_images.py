import os
import sys
import subprocess

try:
    import fitz
except ImportError:
    print("Installing PyMuPDF...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyMuPDF"])
    import fitz

pdf_path = "catálogo soma 2.pdf"
output_dir = "assets/images/productos"
os.makedirs(output_dir, exist_ok=True)

try:
    doc = fitz.open(pdf_path)
    extracted_count = 0
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images(full=True)
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_name = f"page_{page_index+1}_img_{image_index}.{image_ext}"
            with open(os.path.join(output_dir, image_name), "wb") as f:
                f.write(image_bytes)
            extracted_count += 1
    print(f"Extraction successful: {extracted_count} images saved to {output_dir}")
except Exception as e:
    print(f"Error extracting images: {e}")
