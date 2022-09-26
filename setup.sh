#!/bin/bash

# shellcheck disable=SC2199

usage="Syntax: $(basename "$0") [-h|--help] [COMPONENTS...] -- will set up the project environment,

where:
    -h | --help     Print this help
    COMPONENTS...   Specify component to set up

Valid COMPONENTS:
    all: set up all components (container will be pulled, not built)
    cont_[pull|build]: pull the singularity container or build it
    data: pull data"

if [[ $# -eq 0 ]] || [[ "$@" =~ "--help" ]] || [[ "$@" =~ "-h" ]];then
    echo "$usage"
    exit 0
fi

CONT_NAME="psiturk.sif"

# container setup
if [[ "$@" =~ "cont_pull" ]] || [[ "$@" =~ "all" ]];then
    echo "Pulling singularity container..."
    wget "https://yale.box.com/shared/static/9kkwmg5qot3s32k1vqlxty1gb6hncgqf.sif" -O "$CONT_NAME"
elif [[ "$@" =~ "cont_build" ]];then
    echo "Building singularity container..."
    SINGULARITY_TMPDIR=/var/tmp sudo -E singularity build "$CONT_NAME" Singularity
else
    echo "Not touching container"
fi


# download stimulus set
if [[ "$@" =~ "data" ]] || [[ "$@" =~ "all" ]];then
    echo "Pulling data..."
    wget "https://yale.box.com/shared/static/2amlu1zguc6rtwdonfp9119imxyw1jxe.zip" -O "stimuli.zip"
    chmod +777 stimuli.zip
    unzip stimuli.zip
    mv stimuli/* psiturk/static/images/
    rm -rf stimuli
    rm -rf stimuli.zip
else
    echo "Not pulling any data"
fi

