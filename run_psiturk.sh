#!/bin/bash

cd "$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )" || exit
. load_config.sh

CONT="${ENV['cont_img']}"

# Parse the incoming command
COMMAND="$*"

# Enter the container and run the command
SING="${ENV['exec']} exec --nv"

printf "=%.0s"  $(seq 1 79)
printf "\nExecuting: %s\n" "${COMMAND}"
printf "=%.0s"  $(seq 1 79)
printf "\n"
${SING} ${CONT} bash -c "source ${ENV['env']}/bin/activate \
        && cd psiturk \
        && psiturk server $COMMAND \
        && deactivate"
