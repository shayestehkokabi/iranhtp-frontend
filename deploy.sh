    #!/bin/bash
    # دستورات لازم برای دیپلوی در سرور
    git pull origin master
    sudo docker compose up -d --build
