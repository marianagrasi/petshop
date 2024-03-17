import matplotlib.pyplot as plt
def generarGrafica(dataFrame):
    # Agrupar datos del dataframe segun el analisis que quiere
    # Estadisticas de un alimento (pan) por pais y su promedio al año
    # El el parentesis se pone el dato que va en el eje X
    # En el corchete se pone el dato que va en el eje Y
    # mean() para capturar la media

    ventas=dataFrame.groupby('nombreProducto')['cantidad'].mean()
    print(ventas)

    # 0. Generando lista de colores
    colores=["#917D27","#4A4A18","#BEAF92","#FE982A","#BB4F07"]

    # 1. Generar una figura
    plt.figure(figsize=(10,15))

    # 2. Genero la grafica que deseo, bar es grafica de barras
    #index es origen y values es precio
    plt.bar(ventas.index,ventas.values, color=colores)

    # 3. Muestro la grafica
    #plt.show()

    # 4. Agrego titulo a la grafica
    plt.title("Productos vendidos") 

    # 5. Etiqueta o nombre del eje X
    plt.xlabel("Cantidad")

    # 6. Etiqueta o nombre del eje Y
    plt.ylabel("Cantidad vendida")

    # 7. Activar el grid
    plt.grid(True)

    # 8. Rotar los labels
    plt.xticks(rotation=45)

    # 9. Guardando nuestra grafica
    plt.savefig("./graphs/promediosiembraarboles.png")


   
