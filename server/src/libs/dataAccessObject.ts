class DAO {
  items: any[];
  constructor() {
    this.items = [];
  }

  addItem(item: {}) {
    const record = {
      ...item,
      created: new Date().toISOString(),
    };

    this.items.push(record);

    return record;
  }

  reset() {
    this.items = [];
  }
}

const DataAccessObject = new DAO();
export default DataAccessObject;
