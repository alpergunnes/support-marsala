const supportForm = document.querySelector("#support-form");
supportForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tur = supportForm["tur"].value;
  const baslik = supportForm["baslik"].value;
  const note = supportForm["sumernote"];

  console.log(tur, baslik, note);

  //   db.collection("support-destek").doc("supports").set({
  //     tur,
  //     baslik,
  //     note,
  //   });
  //   auth.createUserWithEmailAndPassword(mail, parola).then((sonuc) => {
  //     console.log(sonuc.user);

  //     return db
  //       .collection("kullanicilar")
  //       .doc(sonuc.user.uid)
  //       .set({
  //         bio: uyelikForm["signup-bio"].value,
  //       })
  //       .then(() => {
  //         const modal = document.querySelector("#modal-signup");
  //         M.Modal.getInstance(modal).close();
  //         uyelikForm.reset();
  //       });
  //   });
});
