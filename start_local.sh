#!/bin/bash

CONT_NAME="cont.sif"

singularity exec "$CONT_NAME" bash -c "cd psiturk && psiturk server on"
