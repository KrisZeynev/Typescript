type HttpResponse = {
  code: number;
  text: string;
  printChars?: number;
};

function httpCats(response: HttpResponse) {
  if (response.printChars) {
    console.log(response.text.slice(0, response.printChars));
  } else {
    console.log(response.text);
  }
}
httpCats({ code: 200, text: "OK" });
httpCats({ code: 201, text: "Created" });
httpCats({ code: 400, text: "Bad Request", printChars: 4 });
httpCats({ code: 404, text: "Not Found" });
httpCats({ code: 404, text: "Not Found", printChars: 3 });
httpCats({ code: 500, text: "Internal Server Error", printChars: 1 });
