FROM python 
COPY . /habobaa
EXPOSE 9000
WORKDIR /habobaa
CMD python -m http.server 9000