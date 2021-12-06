import os

def walk(dirname):
    for name in os.listdir(dirname):
        path = os.path.join(dirname, name)
        if os.path.isfile(path):
            os.system(f"cwebp.exe -q 80 {path} -o {path[:-4]}.webp")
        else:
            walk(path)
walk(".")