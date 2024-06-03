import pyautogui
import random
import sys
import datetime
import time

X_MOUSE = 500
Y_MOUSE = 970

MIN_WAIT_HUMAN = 1
MAX_WAIT_HUMAN = 2

MIN_WAIT_COOLDOWN = 13
MAX_WAIT_COOLDOWN = 15

colors = {
        "CYAN" : "\033[1;36m",
        "GREEN" : "\033[0;32m",
        "RESET" : "\033[0;0m",
        "YELLOW" : "\033[33m"
    }

# TODO Modificar la lista de cartas con las que quieres vender
CARDS = ["vbblh44"]

def seller():
    pyautogui.moveTo(X_MOUSE, Y_MOUSE, duration = 1)

    pyautogui.click()

    wait_time = 0
    human_wait = []
    cooldowns = []
    for key in range(0,len(CARDS)):
        wait_h = random.randint(MIN_WAIT_HUMAN*100, MAX_WAIT_HUMAN*100)/100
        wait_c = random.randint(MIN_WAIT_COOLDOWN*100, MAX_WAIT_COOLDOWN*100)/100

        wait_time += wait_h + wait_c
        human_wait.append(wait_h)
        cooldowns.append(wait_c)
        
    now = datetime.datetime.now()

    print_color(f'Hora de inicio: {now.strftime("%H:%M:%S")}\nHora estimada de fin: {(now + datetime.timedelta(0,wait_time)).strftime("%H:%M:%S")}\nTiempo estimado: {round(wait_time/60, 2)}m', "CYAN")

    for key, c in enumerate(CARDS):
        pyautogui.write(f"kv {c}")

        time.sleep(human_wait[key])

        pyautogui.press("enter") 

        print_progress(key+1, len(CARDS))

        time.sleep(cooldowns[key])

  # METODOS AUXILIARES ------------------------------------------------------

def print_progress(part, total):
    if (part != total):
        sys.stdout.write(colors["YELLOW"])
        sys.stdout.write("\r{}/{}  {}%".format(part, total, round((((part)/total)*100),2)))
    else:
        sys.stdout.write(colors["GREEN"])
        sys.stdout.write("\r{}/{}  {}%".format(part, total, round((((part)/total)*100),2)))
        print()
    sys.stdout.write(colors["RESET"])

def print_color(contenido, color):
    sys.stdout.write(colors[color]) #RED
    sys.stdout.write("\r{}".format(contenido))
    print()
    sys.stdout.write(colors["RESET"]) #RESET #Recorre las filas de la respuesta  

if __name__ == '__main__':
    print(pyautogui.size()) 
    print(pyautogui.position()) #-> sacar de aqui el punto donde hace click el raton
    seller()