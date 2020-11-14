const Database = require ('./index.js');
/*
// for next stages that we will have records with the same ISBN-13
const product = new Database.ProductDetails({
  isbn13: "9780062011688",
  publisherName: "HarperCollins e-books",
  publisherLink: "/publisher",
  publicationDate: 11/23/2010,
  soldBy: "HARPERCOLLINS",
  format: "NOOK Book",
  pages: 272,
  salesRank: 488829,
  fileSize: '5 MB'
});
/*
product.save(function (err, product) {
  if (err) return console.error(err);
  console.log("A new book was saved in MongoDB!");
});*/
/*
product.save()
  .then(product => console.log('The product ' + product.isbn13 + ' has been added.'))
  .catch(err => console.log(err))
  //.finally(() => user.db.close());
*/
  let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var getRandomValueFromArr = (array)=> {
      let randomValue = array[Math.floor(Math.random()* array.length)];
      return randomValue;
  }

  var getRandomIsbn = () => {
    let num = "";

    while (num.length <= 13) {
      num += getRandomIntInclusive(0,9);
    }

    return num;
  }

  var randomDate = (date1, date2)=> {
    randomValueBetween = (min, max)=>{
      return Math.random() * (max - min) + min;
    }
    date1 = date1 || '01-01-1970'
    date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if (date1 > date2) {
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()
    } else {
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()

    }
}

for (var i = 0; i < 200; i++) {

  let newRecord = {};
  newRecord.isbn13 = getRandomIsbn();

  var publishers = ["HarperCollins e-books", "Princeton University Press", "Norton, W. W. & Company, Inc.", "Little, Brown and Company", "Scribner", "St. Martin''s Publishing Group", "Regnery Publishing", "IDW Publishing", "Potter/Ten Speed/Harmony/Rodale", "Chronicle Books LLC", "Simon & Schuster"];
  var randomPublisher = getRandomValueFromArr(publishers);
  newRecord.publisherName = randomPublisher;

  newRecord.publisherLink = "/publisher";

  newRecord.publicationDate = randomDate('01/01/1900', '11/01/2020');

  let series = ["" ,"Oprah's Book Club Series", "Step into Reading Book Series: A Step 2 Book", "Cat in the Hat Knows a Lot About That Series", "Twilight Saga Series", "Infernal Devices Series", "Secrets of the Immortal Nicholas Flamel Series", "Daughter of Smoke & Bone Series", "Shadow and Bone Trilogy Series", "Nine Lives of Chloe King Series", "Chaos Walking Series", "Graceling Realm Series"];
  let randomSeries = getRandomValueFromArr(series);
  newRecord.series = randomSeries;

  let editionDescription = ["" ,"Reprint", "Sixth Edition", "New Edition", "Second Edition"];
  let randomEditionDescription = getRandomValueFromArr(editionDescription);
  newRecord.editionDescription = randomEditionDescription;

  //pages
  newRecord.pages = getRandomIntInclusive(150, 1000);

  // sales rank
  newRecord.salesRank = getRandomIntInclusive(0, 6000000000);


  let productDimenstions = ["" ," 6.30(w) x 9.00(h) x 1.40(d)", "6.13(w) x 9.25(h) x (d)", "5.50(w) x 8.25(h) x 1.11(d)", "5.40(w) x 8.20(h) x 0.80(d)", "5.50(w) x 8.50(h) x 1.10(d)"];
  let randomProductDimenstions = getRandomValueFromArr(productDimenstions);
  newRecord.productDimenstions = randomProductDimenstions;

  let fileSize = ["" ,"5 MB", "3 MB", "2 MB"];
  let randomFileSize = getRandomValueFromArr(fileSize);
  newRecord.fileSize = randomFileSize;

  const product = new Database.ProductDetails(newRecord);
  product.save()
  .then(product => console.log('The product ' + product.isbn13 + ' has been added.'))
  .catch(err => console.log(err));
}
