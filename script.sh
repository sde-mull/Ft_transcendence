#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
    green=$(tput setaf 2)
    yellow=$(tput setaf 3)
    reset=$(tput sgr0)
else
    green="\e[32m"
    yellow="\e[33m"
    reset="\e[0m"
fi

if [ $# -eq 1 ]; then
    git add .
    git commit -m "$1"
    git_exit_code=$?
    if [ $git_exit_code -eq 0 ]; then
        echo "${green}Git commit executed successfully.${reset}"
    else
        echo "${yellow}Git commit failed.${reset}"
        exit 1
    fi
    git push
    if [ $git_exit_code -eq 0 ]; then
        echo "${green}Git push executed successfully.${reset}"
    else
        echo "${yellow}Git push failed.${reset}"
        exit 1
    fi
fi