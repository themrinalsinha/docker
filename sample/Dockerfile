FROM ubuntu:bionic
ENV  LANG=C.UTF-8

RUN apt update && apt upgrade -y && \
    apt install -y apt-transport-https build-essential \
    curl flake8 fabric git sudo wget \
    python3-dev python3-setuptools python3-pip

RUN apt install tesseract-ocr python3-pyocr



RUN echo "Required packages installed!"
