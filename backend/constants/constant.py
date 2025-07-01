# Option 1: Use Unsplash (recommended for Next.js)
imagelinks = [
    {
        'label': 'Tomato___Bacterial_spot',
        'image': 'https://images.unsplash.com/photo-1627651852048-30a59c8d1c26?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Early_blight',
        'image': 'https://images.unsplash.com/photo-1626501851351-3dc9a07e8ad7?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Late_blight',
        'image': 'https://images.unsplash.com/photo-1595391574842-1dafb9aa92cd?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Leaf_Mold',
        'image': 'https://images.unsplash.com/photo-1635765433150-e6e3a8e8f8c2?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Septoria_leaf_spot',
        'image': 'https://images.unsplash.com/photo-1590422558608-6fb0c6d5aae5?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Spider_mites_Two-spotted_spider_mite',
        'image': 'https://images.unsplash.com/photo-1589922196976-24d5e0fb57ed?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Target_Spot',
        'image': 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'image': 'https://images.unsplash.com/photo-1595391574842-1dafb9aa92cd?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___Tomato_mosaic_virus',
        'image': 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop&crop=center'
    },
    {
        'label': 'Tomato___healthy',
        'image': 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop&crop=center'
    },
]

# Option 2: Use Picsum (Lorem Picsum) - Always works, random plant images
imagelinks_picsum = [
    {
        'label': 'Tomato___Bacterial_spot',
        'image': 'https://picsum.photos/400/300?random=1'
    },
    {
        'label': 'Tomato___Early_blight',
        'image': 'https://picsum.photos/400/300?random=2'
    },
    {
        'label': 'Tomato___Late_blight',
        'image': 'https://picsum.photos/400/300?random=3'
    },
    {
        'label': 'Tomato___Leaf_Mold',
        'image': 'https://picsum.photos/400/300?random=4'
    },
    {
        'label': 'Tomato___Septoria_leaf_spot',
        'image': 'https://picsum.photos/400/300?random=5'
    },
    {
        'label': 'Tomato___Spider_mites_Two-spotted_spider_mite',
        'image': 'https://picsum.photos/400/300?random=6'
    },
    {
        'label': 'Tomato___Target_Spot',
        'image': 'https://picsum.photos/400/300?random=7'
    },
    {
        'label': 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'image': 'https://picsum.photos/400/300?random=8'
    },
    {
        'label': 'Tomato___Tomato_mosaic_virus',
        'image': 'https://picsum.photos/400/300?random=9'
    },
    {
        'label': 'Tomato___healthy',
        'image': 'https://picsum.photos/400/300?random=10'
    },
]

# Option 3: Use JSONPlaceholder or placeholder services
imagelinks_placeholder = [
    {
        'label': 'Tomato___Bacterial_spot',
        'image': 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Bacterial+Spot'
    },
    {
        'label': 'Tomato___Early_blight',
        'image': 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Early+Blight'
    },
    {
        'label': 'Tomato___Late_blight',
        'image': 'https://via.placeholder.com/400x300/2F4F2F/FFFFFF?text=Late+Blight'
    },
    {
        'label': 'Tomato___Leaf_Mold',
        'image': 'https://via.placeholder.com/400x300/556B2F/FFFFFF?text=Leaf+Mold'
    },
    {
        'label': 'Tomato___Septoria_leaf_spot',
        'image': 'https://via.placeholder.com/400x300/8FBC8F/000000?text=Septoria+Leaf+Spot'
    },
    {
        'label': 'Tomato___Spider_mites_Two-spotted_spider_mite',
        'image': 'https://via.placeholder.com/400x300/DC143C/FFFFFF?text=Spider+Mites'
    },
    {
        'label': 'Tomato___Target_Spot',
        'image': 'https://via.placeholder.com/400x300/A0522D/FFFFFF?text=Target+Spot'
    },
    {
        'label': 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'image': 'https://via.placeholder.com/400x300/FFD700/000000?text=Yellow+Leaf+Curl'
    },
    {
        'label': 'Tomato___Tomato_mosaic_virus',
        'image': 'https://via.placeholder.com/400x300/9ACD32/000000?text=Mosaic+Virus'
    },
    {
        'label': 'Tomato___healthy',
        'image': 'https://via.placeholder.com/400x300/228B22/FFFFFF?text=Healthy+Tomato'
    },
]

# Option 4: Use local images (recommended for production)
# Place images in public/images/ folder and reference like this:
imagelinks_local = [
    {
        'label': 'Tomato___Bacterial_spot',
        'image': '/images/tomato-bacterial-spot.jpg'
    },
    {
        'label': 'Tomato___Early_blight',
        'image': '/images/tomato-early-blight.jpg'
    },
    {
        'label': 'Tomato___Late_blight',
        'image': '/images/tomato-late-blight.jpg'
    },
    {
        'label': 'Tomato___Leaf_Mold',
        'image': '/images/tomato-leaf-mold.jpg'
    },
    {
        'label': 'Tomato___Septoria_leaf_spot',
        'image': '/images/tomato-septoria-leaf-spot.jpg'
    },
    {
        'label': 'Tomato___Spider_mites_Two-spotted_spider_mite',
        'image': '/images/tomato-spider-mites.jpg'
    },
    {
        'label': 'Tomato___Target_Spot',
        'image': '/images/tomato-target-spot.jpg'
    },
    {
        'label': 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'image': '/images/tomato-yellow-leaf-curl.jpg'
    },
    {
        'label': 'Tomato___Tomato_mosaic_virus',
        'image': '/images/tomato-mosaic-virus.jpg'
    },
    {
        'label': 'Tomato___healthy',
        'image': '/images/tomato-healthy.jpg'
    },
]


labels = [
  'Tomato___Bacterial_spot',
  'Tomato___Early_blight',
  'Tomato___Late_blight',
  'Tomato___Leaf_Mold',
  'Tomato___Septoria_leaf_spot',
  'Tomato___Spider_mites_Two-spotted_spider_mite',
  'Tomato___Target_Spot',
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
  'Tomato___Tomato_mosaic_virus',
  'Tomato___healthy',
];