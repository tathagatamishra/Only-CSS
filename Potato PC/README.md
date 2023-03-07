<img align="left" src="https://media.giphy.com/media/5W2l2EXfBpYulPB7yT/giphy.gif" width="70">

# POTATO PC

### Deployed on Netlify &#160; <img src="https://media.giphy.com/media/FbUuPsOW3oOCdAHexF/giphy.gif" width="50"> &#160; https://potato-pc.netlify.app/
-----------------------------------------------------------

## Created Only Using `CSS` & `HTML` & `JS`

### no `image` / `png` / `svg` / `vector graphics` used

0. Only Buttons are interactive

1. The index.html contains all major part

2. The noise.html contains only the noise effect

3. Noise generated using `CSS`, created by animating `repeating-radial-gradient`

4. noise.html is connected with index.html by a <a> tag inside a button div

5. every circular buttons are clickable & connected to a specific youtube video

6. Everything created/generated only using very basic `CSS` properties


## Two Difficult Things That I Did Using `CSS` & `JS`

1. Creating the NOISE EFFECT using `CSS`
2. Connecting different YouTube videos to different Buttons using `JS`

## NOISE EFFECT IN `CSS`
```sh
  <style>
        body {
            background: repeating-radial-gradient(rgb(0, 0, 0) 0 0.0001%,
                    rgb(255, 255, 255) 0 0.0002%) 50% 0/2500px 2500px,
                repeating-conic-gradient(rgb(255, 255, 255) 0 0.0001%,
                    rgb(0, 0, 0) 0 0.0002%) 60% 60%/2500px 2500px;
            background-blend-mode: difference;
            animation: noize 0.2s infinite alternate;
        }

        @keyframes noize {
            100% {
                background-position: 50% 0, 60% 50%;
            }
        }
    </style>
```

## PREVIEW 
![pc](https://user-images.githubusercontent.com/114053180/221780116-81f8e19a-5e5e-4524-a8ac-b0c785b30cdb.png)

### If you like this project, please SUBSCRIBE to my YouTube channel
### https://www.youtube.com/@vfxinvein

