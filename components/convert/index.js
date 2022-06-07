const convert = (data, mode) => {
  switch (mode) {
    case 1:
      data = data.split("\n");
      data = data.map((line) => line.split(","));
      data.splice(data.length - 1, 1);
      return data;
    case 2:
      data = data.map((line) => line.join(","));
      data = data.join("\n");
      return data;
  }
};

export default convert;
