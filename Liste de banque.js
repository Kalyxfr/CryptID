const banques = [
    "Banque de France", "BNP Paribas", "Société Générale", "Crédit Agricole", "Crédit Mutuel", 
    "La Banque Postale", "Caisse d'Épargne", "LCL (Le Crédit Lyonnais)", "HSBC France", "Barclays France", 
    "BRED Banque Populaire", "Banque Populaire", "Banque Tarneaud", "Groupama Banque", "Banque Chalus", 
    "Crédit du Nord", "ING Direct", "Monabanq", "Fortuneo", "Boursorama Banque", "AXA Banque", 
    "CIC", "Banque Palatine", "Banque Marze", "Banque Courtois", "Banque Transatlantique", "Banque de Savoie", 
    "Banque de l'Union Européenne", "Banque Postale Financement", "Société Générale Private Banking", "Caisse d'Épargne Rhône-Alpes",
    "Crédit Agricole Aquitaine", "LCL Private Banking", "Crédit Coopératif", "Crédit Lyonnais", "Société Marseillaise de Crédit", 
    "Banque Dupuy de Parseval", "Banque de Luxembourg", "Banca Sella France", "Banque Privée 1818", "Banque Courtois", 
    "BPGC", "BPLG", "Groupama", "Banque Pictet", "Banque de France", "Société Générale", "BPI France", "Crédit Agricole Languedoc", 
    "Caisse d'Épargne Ile-de-France", "La Banque Postale", "BRED", "Crédit Mutuel Arkéa", "Caisse d’Épargne Normandie", "Crédit Agricole Provence Alpes Côte d'Azur",
    "Crédit Agricole Centre-Est", "Banque Populaire Rives de Paris", "LCL Banque de Financement", "BforBank", "Caisse d'Épargne Loire-Centre", 
    "Banque de la Réunion", "Crédit Agricole Alsace-Vosges", "Société Générale Banque Privée", "LCL Banque de Financement", "Banque Chaix", 
    "Caisse d'Épargne Normandie", "La Banque Postale Financements", "Crédit Agricole Brie Picardie", "Crédit Agricole Lorraine", "Crédit Agricole Sud Rhône-Alpes", 
    "Crédit Agricole Antilles Guyane", "Crédit Agricole Toulouse 31", "Banque Populaire du Massif Central", "BPI France Financement", "Crédit Mutuel de Bretagne", 
    "Société Générale Private Banking", "LCL Banque Privée", "Banque Palatine", "Caisse d'Épargne Bretagne-Pays de la Loire", "Crédit Agricole du Nord Est", 
    "Caisse d'Épargne Midi-Pyrénées", "Crédit Mutuel Sud-Est", "Banque Nationale du Maroc", "Banque de Savoie et de l'Isère", "Crédit Agricole Touraine Poitou", 
    "Crédit Agricole Sud Méditerranée", "Société Générale Equities", "Banque de Bretagne", "Banque Martin Maurel", "Banque de l'Indochine et du Pacifique",
    "Banque Cantonale Vaudoise", "Banque de l'Aude", "Banque Chaix", "Banque Populaire Aquitaine Centre Atlantique", "Banque Populaire du Sud", 
    "Banque de l'Indochine", "CIC Banque", "Banque Chalus", "LCL Banque", "Banque Atlantique", "Banca Popolare di Milano", "Caisse d'Épargne Midi-Pyrénées",
    "Crédit Agricole Aquitaine", "Crédit Agricole Loire Haute Loire", "Crédit Agricole Centre France", "Banque Tarneaud", "Banque Dupuy de Parseval", 
    "Banque de la Baie", "Banque d'Escompte", "Banque Privée d'Investissement", "Brouard et Associés", "Société Générale Private Banking", "Banca Nazionale del Lavoro",
    "LCL - Banque", "Banque Privée 1818", "Crédit Agricole de l'Ouest", "Caisse d'Épargne Rhône-Alpes", "Banque de France", "Banca di Roma", 
    "Barclays", "BGL BNP Paribas", "Banque de France", "Groupama Banque", "Banque Palatine", "Crédit Agricole Centre Est", "Banque Nationale de Paris", 
    "Banque de la Réunion", "Caisse d'Épargne Bourgogne Franche-Comté", "Banca Carige", "Société Générale Private", "Banque de la Mediterranée", 
    "CIC Banque", "Crédit Agricole Provence Alpes Côte d'Azur", "Banque de France", "Caisse d'Épargne de Provence Alpes Côte d'Azur", "La Banque Postale", 
    "LCL Banque", "Banque Fédérale", "Banque Caisse d'Épargne", "Crédit Mutuel Loire Bretagne", "Banque Populaire de l'Ouest", "Banque Populaire du Sud", 
    "Crédit Agricole Lorraine", "Banque Populaire", "Crédit Agricole", "Banque Sogénial", "CIC", "Crédit Agricole de Normandie", "Société Générale", 
    "Caisse d'Épargne Midi-Pyrénées", "Banque Populaire de la Loire", "Crédit Agricole du Sud", "Crédit Agricole de Charente-Maritime", "Banque Privée", 
    "Banque Chaix", "Crédit Agricole Languedoc-Roussillon", "Crédit Agricole Franche-Comté", "Crédit Agricole du Finistère", "Banca Popolare di Vicenza", 
    "La Banque Postale", "Société Générale", "BGL BNP Paribas", "Banque Privée 1818", "Banque Populaire Centre Atlantique", "Banque Nationale", "LCL Banque Privée"
];

function afficherBanques() {
    console.log("Liste des banques de France :");
    banques.forEach((banque, index) => {
        console.log(`${index + 1}. ${banque}`);
    });
}

afficherBanques();
