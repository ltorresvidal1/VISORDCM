FROM nginx
COPY ./index.html /usr/share/nginx/html/index.html
#docker run --name visordcm -p 3000:80 -v ~/Users/luistorresvidal/Documents/Programacion/RADIOLOGIA_VISOR:/usr/share/nginx/html:ro -d nginx 