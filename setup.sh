#!/bin/bash


. load_config.sh


usage="Syntax: $(basename "$0") [-h|--help] [COMPONENTS...] -- will set up the project environment,
where:
    -h | --help     Print this help
    COMPONENTS...   Specify component to set up
Valid COMPONENTS:
    all: set up all components (container will be pulled, not built)
    cont_[pull|build]: pull the singularity container or build it
    python: add python venv and install necessary packages
    data: pull data"


echo_green () { echo -e "\033[1;38;5;047m$* \033[0m"; }
echo_blue () { echo -e "\033[1;38;5;051m$* \033[0m"; }
echo_orange () { echo -e "\033[1;38;5;202m$* \033[0m"; }
echo_red () { echo -e "\033[1;38;5;196m$* \033[0m"; }
echo_yellow () { echo -e "\033[1;38;5;226m$* \033[0m"; }
echo_purple () { echo -e "\033[1;38;5;141m$* \033[0m"; }

remove(){ if [ -d "$1" ]; then rm -rf "$1"; fi }
add(){ if [ ! -d "$1" ]; then mkdir -p "$1"; fi }


if [[ $# -eq 0 ]] || [[ "$*" =~ "--help" ]] || [[ "$*" =~ "-h" ]];then
    echo "$usage"
    exit 0
fi

CONT_NAME="psiturk.sif"

## ==========================================================================
## ------------------------- apptainer container setup ------------------- ##
## ==========================================================================
if [[ "$*" =~ "cont_pull" ]] || [[ "$*" =~ "all" ]];then
    echo_blue "Pulling apptainer container..."
    wget "" -O "${ENV[cont]}"
elif [[ "$*" =~ "cont_build" ]];then
    echo_blue "Building apptainer container..."
    remove "${ENV[cont_img]}"
    sudo -E apptainer build "${ENV[cont_img]}" "${ENV[cont_def]}"
elif [[ "$*" =~ "cont_build_fk" ]];then
    echo_blue "Building apptainer container..."
    apptainer build --fakeroot "${ENV[cont_img]}" "${ENV[cont_def]}"
fi


## ==========================================================================
## ------------------------- python setup ---------------------------------- ##
## ==========================================================================
if [[ "$*" =~ "python" ]] || [[ "$*" =~ "all" ]];then
    echo_blue "Setting up Python venv..."

    singularity exec "${ENV[cont_img]}" bash -c "python -m venv ${ENV[env]}"
    ./run.sh "python -m pip install --no-cache --upgrade pip"
    ./run.sh "python -m pip install --no-cache click-help-colors==0.9.2"
    ./run.sh "python -m pip install --no-cache psiturk==3.3.1"
    ./run.sh "python -m pip install --no-cache cryptography==38.0.4"
    ./run.sh "python -m pip install --no-cache python-Levenshtein"
    ./run.sh "python -m pip install --no-cache simplejson"
    ./run.sh "python -m pip install --no-cache futures"
fi


## ==========================================================================
## ------------------------- data setup ------------------------------------ ##
## ==========================================================================
if [[ "$*" =~ "data" ]] || [[ "$*" =~ "all" ]];then
    echo_blue "Pulling data..."
    wget "https://yale.box.com/shared/static/2amlu1zguc6rtwdonfp9119imxyw1jxe.zip" -O "images.zip"
    chmod +777 images.zip
    unzip images.zip
    mv images/* psiturk/static/images/
    rm -rf images
    rm -rf images.zip
else
    echo_orange "Not pulling any data"
fi

