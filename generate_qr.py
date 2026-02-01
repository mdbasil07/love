import qrcode

url = "https://mdbasil07.github.io/love/"

qr = qrcode.QRCode(
    version=None,          # auto size
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4
)

qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("love_qr.png")

print("QR generated → love_qr.png")