import os, sys
import time

class Args:
    def __init__(self):
        self.argc = len(sys.argv)
        self.argv = sys.argv
    def getArgv(self):
        return self.argv
    def getArgc(self):
        return self.argc

def ReturnGuide():
    print("What can i do for you?", end="\n")
    print("-> Python3 initiate_program.py build => This command will build the docker-compose file and start the containers", end="\n")
    print("-> Python3 initiate_program.py down => This command will stop,remove all containers and images", end="\n")
    print("-> Python3 initiate_program.py restart => This command will restart all the running containers", end="\n")
    print("-> Python3 initiate_program.py stop => This command will stop all the running containers", end="\n")


def ExecuteTask(Command):
    if(Command == "build"):
        os.system("docker compose -f docker-compose.yaml up -d --build")
        time.sleep(2)
        os.system("docker exec backend /bin/sh -c 'cd /Project/Server && python3 manage.py migrate'")
        os.system("chmod 777 Database/Data")
        print("The server is running on localhost:8001")
    elif(Command == "stop"):
        os.system("docker compose stop")
    elif(Command == "down"):
        os.system("docker compose down --rmi 'local'")
    elif(Command == "restart"):
        os.system("docker compose -f docker-compose.yaml restart")
    else:
        print("No match for this command")


def main(args: Args):
    if (args.getArgv()[1] == "--help"):
        ReturnGuide()
    else:
        ExecuteTask(args.getArgv()[1])
    
    
if __name__ == "__main__":
    print(__name__)
    main(Args())