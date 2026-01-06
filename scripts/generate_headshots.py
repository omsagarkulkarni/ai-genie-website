from PIL import Image, ImageDraw, ImageFont
import pathlib
output = pathlib.Path('public/images')
output.mkdir(parents=True, exist_ok=True)
size = (400, 400)
for name, color1, color2, initials in [
    ('krishna.png', '#dbf1ff', '#8ab4ff', 'KA'),
    ('om.png', '#ffe8de', '#ffb980', 'OK')]:
    img = Image.new('RGB', size, color1)
    draw = ImageDraw.Draw(img)
    draw.ellipse([50, 50, 350, 350], fill=color2)
    try:
        font = ImageFont.truetype('arial.ttf', 72)
    except IOError:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), initials, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((size[0]-w)/2, (size[1]-h)/2), initials, fill='white', font=font)
    img.save(output / name)
