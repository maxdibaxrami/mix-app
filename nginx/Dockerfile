FROM nginx:alpine

# Copy Nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates
COPY ./ssl/certificate.crt /etc/nginx/ssl/certificate.crt
COPY ./ssl/certificate.key /etc/nginx/ssl/certificate.key


EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
