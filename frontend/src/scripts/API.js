const tableContentBody = document.querySelector("#table-content-body");

const getDataFromAPI = async () => {
  const response = await fetch("http://localhost:3000/contrataciones/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("No se pudo obtener la información de la API");
      }
    })
    .catch((error) => {
      console.error("Ha ocurrido un error al obtener la información: " + error);
      document.body.innerHTML +=
        "<center><h2>No se pudo obtener la información</h2><center>";
      return [{ error: true }];
    });
  return response;
};

const response = await getDataFromAPI();

const renderDataTable = (data) => {
  tableContentBody.innerHTML = "";

  data.map((data, index) => {
    const row = `<tr>
      <td class="col-item">${data.ITEM}</td>
      <td class="col-cantidad">${data.CANTIDAD}</td>
      <td class="col-concepto">${data.CONCEPTO}</td>
      <td class="col-proveedor">${data.PROVEEDOR}</td>
      <td class="col-categoria">${data.CATEGORIA}</td>
      <td class="col-forma-contratar">${data["FORMA DE CONTRATAR"]}</td>
      <td class="col-pagos-mensuales">${data["PAGOS MENSUALES"]}</td>
      <td class="col-valor-unitario">${data["VALOR UNITARIO"]}</td>
      <td class="col-valor-total">${data["VALOR TOTAL(USD)"]}</td>
      <td class="col-valor-dolar">${data["VALOR EN DOLAR"]}</td>
      <td class="col-valor-anual">${data["VALOR ANUAL VIGENCIA 2024(COP)"]}</td>
    </tr>`;
    tableContentBody.innerHTML += row;
  });
};

export { response };
export default renderDataTable;
