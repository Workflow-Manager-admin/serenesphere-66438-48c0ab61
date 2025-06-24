#!/bin/bash
cd /home/kavia/workspace/code-generation/serenesphere-66438-48c0ab61/serene_frontend_workspace/serene_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

