# A clone of gossip (https://github.com/gossip-ink/gossip) to be built via container.

### Very hacky way of getting gossip to run locally in a container.

Made to help a user, I'll keep it here with a copy of the instructions.

TODO: Build a proper solution istead of this hack.

<hr>

Have podman (or docker) available. if on Windows, install podman desktop.       
If you have docker instead of padman, just replace all the `podman` in commands for `docker`

<hr>

Open a command prompt and do     
`podman pull widhaprasa/node-umi:10.23.0-alpine3.11`

Wait for image to download.

`podman run -it -p 8000:8000 widhaprasa/node-umi:10.23.0-alpine3.11 sh`

You should get a shell like this: `/ # `

`cd /root` to go to to home dir

Git is needed so do     
`apk add --no-cache git`

`git clone https://github.com/vluz/gossip.git` gets you my version already built

(if you prefer to clone this rep instead, you'll have to enter `umi build` after the yarn command below)

`cd gossip`

`yarn`

Wait for packages to install, takes a bit.

`umi dev` raises a dev server running on port 8000

Point your browser at `http://127.0.0.1:8000/`          
If all went ok you should see gossip running.

Test around see if all is ok.

Ctrl+C will stop the server and `exit` will get you out of the shell.

To make your changes permanent and not having to go trough all this again do:        

`podman ps -a`

Find the image you've just worked on, and note it's name or container ID         

To commit to a new local image do:        

`podman commit CONTAINER_NAME_OR_ID node-umi-gossip`          
For example in my case it was `podman commit 8b472ad8987b node-umi-gossip`

When you need it, run like this:       
`podman run -id -p 8000:8000 localhost/node-umi-gossip sh -c "cd /root/gossip&&umi dev"`

<hr>

Hope it helps someone run this lovely app

