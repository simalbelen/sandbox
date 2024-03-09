#Autor: Belén Simal Múgica

from tkinter import *
import math
import numpy as np

canvas = Canvas(width=900, height=700, bg='dark grey')
canvas.pack(expand=YES, fill=BOTH)

#   C
# A   B  Triángulo equilátero
def terceraCoordenada(xa, ya, xb, yb):
    #Calculo la x de C (distancia entre A y B /2 + xa)
    d_ab=math.sqrt(pow(xa-xb, 2) + pow(ya-yb, 2))
    xc = d_ab/2+xa
    #Calculo la y de C (altura triangulo dado el lado + ya o yb (ya=yb)
    yc = -(math.sqrt(3)*d_ab)/2 + ya
    return xc, yc

#(x_pm, y_pm) es el punto medio entre los puntos (x_p1, y_p1) y (x_p2, y_p2)
def puntoMedio(x_p1, y_p1, x_p2, y_p2):
    x_pm = (x_p1 + x_p2)/2
    y_pm = (y_p1 + y_p2)/2
    return x_pm, y_pm

#   3
# 1   2
def sierpinski(canvas, n_iter, x1, y1, x2, y2, x3, y3):

    #Dibujo las 3 lineas exteriores
    canvas.create_line(x1, y1, x2, y2)
    canvas.create_line(x1, y1, x3, y3)
    canvas.create_line(x3, y3, x2, y2)

    if n_iter!=0:
        #Calculo los 3 nuevos puntos (p4, p5, p6)
        #       3
        #
        #    6     5
        #
        # 1     4     2

        x4, y4 = puntoMedio(x1, y1, x2, y2)
        x5, y5 = puntoMedio(x2, y2, x3, y3)
        x6, y6 = puntoMedio(x1, y1, x3, y3)

        #Dibujo 3 triángulos dentro de mi triángulo recursivamente
        sierpinski(canvas, n_iter-1, x1, y1, x4, y4, x6, y6)
        sierpinski(canvas, n_iter-1, x4, y4, x2, y2, x5, y5)
        sierpinski(canvas, n_iter-1, x6, y6, x5, y5, x3, y3)



# ------------------------- main -------------------------- #

xa, ya = 100, 650
xb, yb = 800, 650
xc, yc = terceraCoordenada(xa, ya, xb, yb)

sierpinski(canvas, 7, xa, ya, xb, yb, xc, yc)
mainloop()