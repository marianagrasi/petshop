import pandas as pd
from helpers.creacionTabla import crearTabla
from helpers.creacionGrafica import generarGrafica


def analizarPetShop():
    tabla=pd.read_csv('./data/Base-de-datos.csv')

    crearTabla(tabla,"petshop")
    print(tabla)


    filtroVentas=tabla.query("(nombreProducto=='collar') and (cantidad>0) or (nombreProducto=='pañueleta') and (cantidad>0) (nombreProducto=='sueter') and (cantidad>0) or (nombreProducto=='arnes') and (cantidad>0)")
    generarGrafica(filtroVentas)
