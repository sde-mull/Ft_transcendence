import os, sys, argparse

class Args:
    def __init__(self):
        self.argc = len(sys.argv)
        self.argv = sys.argv
    def getArgv(self):
        return self.argv
    def getArgc(self):
        return self.argc



def main(args: Args):
    if(args.getArgv()[1] == "start"):
        os.system("docker-compose -f docker-compose.yaml up -d --build")
    if(args.getArgv()[1] == "stop"):
        os.system("docker-compose -f docker-compose.yaml down")
    
    
if __name__ == "__main__":
    print(__name__)
    main(Args())