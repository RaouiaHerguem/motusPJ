        var db = openDatabase('motusdb', '1.0', 'La liste des mots', 2 * 1024);
        db.transaction(function (tx) {
        tx.executeSql('DROP TABLE words',null,function(){console.log('DROP SUCCEDED');},function(){console.log('DROP FAILED');}); 
        tx.executeSql(
                'CREATE TABLE IF NOT EXISTS words (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,word STRING NON NULL);'
            );
        tx.executeSql('INSERT INTO words (word) VALUES ("abaissai")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abaissas")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abaisser")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abandons")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abatages")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abattage")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abattant")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abatteur")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abattoir")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abdiquer")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abominer")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abonnons")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abordage")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abaissai")');
        tx.executeSql('INSERT INTO words (word) VALUES ("aboyeurs")');
        tx.executeSql('INSERT INTO words (word) VALUES ("aboyeuse")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abrasive")');
        tx.executeSql('INSERT INTO words (word) VALUES ("abricots")');
        tx.executeSql('INSERT INTO words (word) VALUES ("absorber")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acharner")');
        tx.executeSql('INSERT INTO words (word) VALUES ("accroupi")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acharnée")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acheteur")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acomptes")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acronyme")');
        tx.executeSql('INSERT INTO words (word) VALUES ("acropole")');
        tx.executeSql('INSERT INTO words (word) VALUES ("activité")');
        tx.executeSql('INSERT INTO words (word) VALUES ("adhérent")');
});
