# 🖼️ Image Processing Tools Guide

## ✅ Installed Tools (Global)

All tools are installed system-wide and available from any directory.

---

## 🛠️ Tool Overview

### 1. **ImageMagick** (Primary Tool)
**Commands:** `convert`, `identify`, `mogrify`, `montage`, `composite`

**Capabilities:**
- Read/write 200+ image formats
- Resize, crop, rotate, flip
- Apply effects and filters
- Format conversion
- Batch processing
- Create animations
- Combine images

**Common Usage:**
```bash
# Get image info
identify image.jpg
identify -verbose image.jpg

# Convert format
convert input.png output.jpg

# Resize
convert input.jpg -resize 800x600 output.jpg
convert input.jpg -resize 50% output.jpg

# Create thumbnail
convert input.jpg -thumbnail 200x200 thumb.jpg

# Crop
convert input.jpg -crop 800x600+100+100 output.jpg

# Rotate
convert input.jpg -rotate 90 output.jpg

# Add text
convert input.jpg -pointsize 50 -fill white -annotate +100+100 'Text' output.jpg

# Create gradient
convert -size 512x512 gradient:'#FF9900'-'#232F3E' gradient.png

# Batch convert
mogrify -format jpg *.png
```

---

### 2. **GraphicsMagick**
**Command:** `gm`

**Capabilities:**
- High-performance alternative to ImageMagick
- Lower memory usage
- Faster batch operations

**Common Usage:**
```bash
# Convert
gm convert input.png output.jpg

# Batch resize
gm mogrify -resize 800x600 *.jpg

# Get info
gm identify image.jpg

# Batch convert to WebP
gm batch -input *.jpg -output webp -resize 1920x1080
```

---

### 3. **ExifTool**
**Command:** `exiftool`

**Capabilities:**
- Read/write metadata (EXIF, IPTC, XMP)
- Support 100+ file types
- GPS data extraction
- Camera settings
- Copyright info

**Common Usage:**
```bash
# Read all metadata
exiftool image.jpg

# Read specific tag
exiftool -DateTimeOriginal image.jpg

# Write metadata
exiftool -Copyright="Mohannad Emhemed" image.jpg

# Remove all metadata
exiftool -all= image.jpg

# Extract GPS
exiftool -gps:all image.jpg

# Batch rename by date
exiftool '-FileName<DateTimeOriginal' -d %Y%m%d_%H%M%S.%%e *.jpg
```

---

### 4. **WebP Tools**
**Commands:** `cwebp`, `dwebp`

**Capabilities:**
- Convert to/from WebP format
- Modern compression (smaller files)
- Quality control

**Common Usage:**
```bash
# Convert to WebP
cwebp input.jpg -o output.webp
cwebp -q 80 input.png -o output.webp

# Convert from WebP
dwebp input.webp -o output.png

# Batch convert
for f in *.jpg; do cwebp "$f" -o "${f%.jpg}.webp"; done
```

---

### 5. **OptiPNG**
**Command:** `optipng`

**Capabilities:**
- PNG optimization (lossless)
- Reduce file size without quality loss
- Multiple optimization levels

**Common Usage:**
```bash
# Optimize PNG
optipng image.png

# Maximum optimization
optipng -o7 image.png

# Batch optimize
optipng *.png

# Preserve original
optipng -keep image.png
```

---

### 6. **JPEGOptim**
**Command:** `jpegoptim`

**Capabilities:**
- JPEG optimization
- Quality adjustment
- Strip metadata
- Progressive JPEG

**Common Usage:**
```bash
# Optimize JPEG
jpegoptim image.jpg

# Set quality
jpegoptim --max=85 image.jpg

# Strip metadata
jpegoptim --strip-all image.jpg

# Batch optimize
jpegoptim --max=85 *.jpg
```

---

### 7. **PNGQuant**
**Command:** `pngquant`

**Capabilities:**
- PNG compression with quality
- Color reduction (256 colors)
- Significant size reduction

**Common Usage:**
```bash
# Compress PNG
pngquant image.png

# Set quality
pngquant --quality=65-80 image.png

# Overwrite original
pngquant --ext .png --force image.png

# Batch compress
pngquant *.png
```

---

### 8. **Inkscape**
**Command:** `inkscape`

**Capabilities:**
- SVG editor and converter
- Vector to raster conversion
- Export to PNG, PDF, EPS

**Common Usage:**
```bash
# SVG to PNG
inkscape input.svg --export-filename=output.png

# Set size
inkscape input.svg --export-filename=output.png --export-width=1920

# SVG to PDF
inkscape input.svg --export-filename=output.pdf

# Batch convert
for f in *.svg; do inkscape "$f" --export-filename="${f%.svg}.png"; done
```

---

### 9. **FFmpeg**
**Command:** `ffmpeg`

**Capabilities:**
- Video/image processing
- Extract frames from video
- Create video from images
- Format conversion

**Common Usage:**
```bash
# Extract frame from video
ffmpeg -i video.mp4 -ss 00:00:10 -vframes 1 frame.jpg

# Create video from images
ffmpeg -framerate 30 -pattern_type glob -i '*.jpg' -c:v libx264 output.mp4

# Convert image format
ffmpeg -i input.png output.jpg

# Resize image
ffmpeg -i input.jpg -vf scale=800:600 output.jpg
```

---

### 10. **libvips**
**Command:** `vips`

**Capabilities:**
- Fast image processing
- Low memory usage
- Large image support
- Batch operations

**Common Usage:**
```bash
# Resize
vips resize input.jpg output.jpg 0.5

# Convert format
vips copy input.png output.jpg

# Thumbnail
vips thumbnail input.jpg output.jpg 200

# Get info
vips info image.jpg
```

---

### 11. **GIMP** (GUI/CLI)
**Command:** `gimp`

**Capabilities:**
- Full-featured image editor
- Scriptable with Python-Fu
- Advanced editing
- Batch processing via scripts

**Common Usage:**
```bash
# Open image
gimp image.jpg

# Batch convert (requires script)
gimp -i -b '(batch-convert "*.png" "jpg")' -b '(gimp-quit 0)'
```

---

## 📋 Supported Formats

### Raster Formats
- **Common:** PNG, JPG, JPEG, GIF, BMP, TIFF, WebP, ICO
- **Modern:** AVIF, HEIC, JXL
- **Professional:** PSD (Photoshop), XCF (GIMP)
- **Raw:** CR2, NEF, ARW, DNG, RAF, ORF

### Vector Formats
- SVG, EPS, PDF, AI, CDR

### Other
- Animated: GIF, APNG, WebP
- Icons: ICO, ICNS
- Documents: PDF (images)

---

## 🎯 Common Workflows

### Create Favicon Set
```bash
# From logo
convert logo.png -resize 512x512 favicon-512.png
convert logo.png -resize 192x192 favicon-192.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 32x32 favicon-32.png
convert logo.png -resize 16x16 favicon-16.png
convert favicon-16.png favicon-32.png favicon.ico
```

### Optimize Images for Web
```bash
# JPEG
jpegoptim --max=85 --strip-all *.jpg

# PNG
optipng -o7 *.png
# or
pngquant --quality=65-80 --ext .png --force *.png

# Convert to WebP
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

### Batch Resize
```bash
# ImageMagick
mogrify -resize 1920x1080 -quality 85 *.jpg

# GraphicsMagick
gm mogrify -resize 1920x1080 -quality 85 *.jpg

# Preserve aspect ratio
mogrify -resize 1920x1080\> *.jpg
```

### Create Thumbnails
```bash
# Create thumbs directory
mkdir thumbs

# Generate thumbnails
for f in *.jpg; do
  convert "$f" -thumbnail 200x200^ -gravity center -extent 200x200 "thumbs/$f"
done
```

### Extract Metadata
```bash
# All metadata
exiftool -all image.jpg > metadata.txt

# Specific fields
exiftool -DateTimeOriginal -Make -Model -ISO -FNumber image.jpg

# GPS coordinates
exiftool -gps:all -n image.jpg
```

### Convert SVG to Multiple Formats
```bash
# PNG
inkscape logo.svg --export-filename=logo.png --export-width=1920

# PDF
inkscape logo.svg --export-filename=logo.pdf

# Multiple sizes
for size in 16 32 64 128 256 512; do
  inkscape logo.svg --export-filename=logo-${size}.png --export-width=$size
done
```

---

## 🔍 Image Analysis

### Get Image Information
```bash
# Basic info
identify image.jpg

# Detailed info
identify -verbose image.jpg

# Format only
identify -format "%wx%h %b %m" image.jpg

# Batch info
identify *.jpg > images_info.txt
```

### Check Image Quality
```bash
# JPEG quality estimate
identify -verbose image.jpg | grep Quality

# File size
ls -lh image.jpg

# Compression ratio
exiftool -FileSize -ImageSize image.jpg
```

---

## 💡 Pro Tips

### 1. Preserve Quality
```bash
# Use high quality for JPEG
convert input.png -quality 95 output.jpg

# Lossless PNG optimization
optipng -o7 image.png
```

### 2. Batch Processing
```bash
# Process all images in directory
for f in *.jpg; do
  convert "$f" -resize 800x600 "resized_$f"
done
```

### 3. Create Image with Text
```bash
convert -size 1920x1080 xc:white \
  -font DejaVu-Sans-Bold -pointsize 72 -fill black \
  -gravity center -annotate +0+0 'Your Text' \
  output.png
```

### 4. Watermark Images
```bash
convert input.jpg watermark.png \
  -gravity southeast -geometry +10+10 \
  -composite output.jpg
```

### 5. Create Collage
```bash
montage *.jpg -tile 3x3 -geometry +5+5 collage.jpg
```

---

## 🚀 Quick Reference

| Task | Command |
|------|---------|
| Get info | `identify image.jpg` |
| Convert format | `convert input.png output.jpg` |
| Resize | `convert input.jpg -resize 800x600 output.jpg` |
| Optimize JPEG | `jpegoptim --max=85 image.jpg` |
| Optimize PNG | `optipng image.png` |
| To WebP | `cwebp input.jpg -o output.webp` |
| SVG to PNG | `inkscape input.svg --export-filename=output.png` |
| Metadata | `exiftool image.jpg` |
| Batch resize | `mogrify -resize 800x600 *.jpg` |
| Create favicon | `convert logo.png -resize 32x32 favicon.ico` |

---

## 📚 Documentation

- **ImageMagick:** https://imagemagick.org/
- **GraphicsMagick:** http://www.graphicsmagick.org/
- **ExifTool:** https://exiftool.org/
- **FFmpeg:** https://ffmpeg.org/
- **Inkscape:** https://inkscape.org/

---

*All tools installed globally and ready to use!*
