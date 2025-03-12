import random
import string
from colorama import Fore, init

init(autoreset=True)

prenoms = ["Pierre", "Marie", "Jacques", "Sophie", "Claude", "Julie", "Luc", "Hélène", "Michel", "Camille"]
noms = ["Durand", "Lemoine", "Dubois", "Lefevre", "Moreau", "Boucher", "Lemoine", "Martin", "Bernard", "Robert"]

def generate_random_string(length, type="mixed"):
    """Générer une chaîne aléatoire de caractères"""
    vowels = "aeiouy"
    consonants = "bcdfghjklmnpqrstvwxz"
    numbers = "0123456789"
    symbols = "!@#$%^&*"
    letters = consonants + vowels
    chars = letters
    if type == "letters":
        chars = letters
    elif type == "numbers":
        chars = numbers
    elif type == "password":
        chars += numbers + symbols
    return ''.join(random.choice(chars) for _ in range(length)).capitalize()

def generate_date_of_birth():
    """Générer une date de naissance aléatoire"""
    year = random.randint(1940, 2005)
    month = str(random.randint(1, 12)).zfill(2)
    day = str(random.randint(1, 28)).zfill(2)
    return f"{day}/{month}/{year}"

def generate_random_digits(length):
    """Générer des chiffres aléatoires"""
    return ''.join(random.choice('0123456789') for _ in range(length))

def generate_fake_identity():
    """Générer une identité aléatoire"""
    first_name = random.choice(prenoms)
    last_name = random.choice(noms)
    email = f"{first_name.lower()}.{last_name.lower()}@gmail.com"
    phone = f"+{generate_random_digits(2)} {generate_random_digits(3)}-{generate_random_digits(3)}-{generate_random_digits(4)}"
    address = f"{generate_random_digits(4)} {generate_random_string(7)} Rue, {generate_random_string(6)}, {generate_random_digits(5)}"
    gender = random.choice(["Homme", "Femme"])
    nationality = "Française"
    dob = generate_date_of_birth()
    ip = f"{generate_random_digits(3)}.{generate_random_digits(3)}.{generate_random_digits(3)}.{generate_random_digits(3)}"
    mac = ':'.join(generate_random_digits(2) for _ in range(6))
    password = generate_random_string(12, "password")
    username = generate_random_string(10)
    social_username = f"@{generate_random_string(8)}"
    card_number = f"{generate_random_digits(4)}-{generate_random_digits(4)}-{generate_random_digits(4)}-{generate_random_digits(4)}"
    card_exp = f"{str(random.randint(1, 12)).zfill(2)}/{random.randint(25, 30)}"
    cvv = generate_random_digits(3)
    bank = random.choice(["Banque de France", "BNP Paribas", "Société Générale", "Crédit Agricole"])
    job = generate_random_string(10)
    company = generate_random_string(10) + " Société"
    degree = generate_random_string(6) + " Diplôme"
    university = random.choice(["Université Paris 1 Panthéon-Sorbonne", "Université Paris-Saclay", "Université de Lyon"])
    plate_number = f"{generate_random_string(2, 'letters').upper()}-{generate_random_digits(3)}-{generate_random_string(2, 'letters').upper()}"
    passport_number = generate_random_digits(9)
    social_security_number = generate_random_digits(9)
    eye_color = random.choice(["Bleu", "Vert", "Marron", "Noisette", "Gris"])
    hair_color = random.choice(["Noir", "Blond", "Brun", "Roux", "Gris"])
    blood_type = random.choice(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
    height = f"{random.randint(150, 200)} cm"
    weight = f"{random.randint(50, 100)} kg"

    identity = {
        "Prénom": first_name,
        "Nom de famille": last_name,
        "Genre": gender,
        "Date de naissance": dob,
        "Nationalité": nationality,
        "Email": email,
        "Téléphone": phone,
        "Adresse": address,
        "IP": ip,
        "MAC": mac,
        "Mot de passe": password,
        "Nom d'utilisateur": username,
        "Nom d'utilisateur social": social_username,
        "Carte bancaire": {"Numéro": card_number, "Expiration": card_exp, "CVV": cvv, "Banque": bank},
        "Travail": job,
        "Entreprise": company,
        "Diplôme": degree,
        "Université": university,
        "Numéro de plaque": plate_number,
        "Numéro de passeport": passport_number,
        "Numéro de sécurité sociale": social_security_number,
        "Couleur des yeux": eye_color,
        "Couleur des cheveux": hair_color,
        "Groupe sanguin": blood_type,
        "Taille": height,
        "Poids": weight,
    }

    return identity

def afficher_identite(identity):
    """Afficher l'identité générée dans la console en français"""
    if identity:
        print(Fore.GREEN + "Identité générée avec succès :")
        for key, value in identity.items():
            if isinstance(value, dict):
                print(Fore.YELLOW + f"{key}:")
                for sub_key, sub_value in value.items():
                    print(Fore.CYAN + f"    {sub_key}: {sub_value}")
            else:
                print(Fore.CYAN + f"{key}: {value}")
    else:
        print(Fore.RED + "Aucune identité générée.")

def handle_command(command):
    """Gérer la commande /généré pour afficher une identité aléatoire"""
    if command.lower() == "/généré":
        identity = generate_fake_identity()
        afficher_identite(identity)
    else:
        print(Fore.RED + "Commande inconnue.")

# Exemple d'utilisation de la commande
while True:
    command = input(Fore.YELLOW + "Entrez une commande : ")
    handle_command(command)