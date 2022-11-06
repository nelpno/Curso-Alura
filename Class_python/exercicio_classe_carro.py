class Carro:
    def __init__(self, motor, marca, kilometragem):
        self.motor = motor
        self.marca = marca
        self.kilometragem = kilometragem

    def QualKilometragem(self):
        print(self.kilometragem)

    def QualPotencia(self):
        print(self.motor)

    def QualMarca(self):
        print(self.marca)

carro1 = Carro('1.5','Kia','10500')
carro1.QualKilometragem()
carro1.QualMarca()
carro1.QualPotencia()
