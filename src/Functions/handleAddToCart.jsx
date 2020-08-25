export const handleAddToCart = (item, action) => {
  const payload = {
    id: item.sys.id,
    title: item.fields.title,
    price: item.fields.price,
    image: item.fields.image.fields.file.url,
    totalItem: 1,
    isAdded: true,
  };

  action(payload);
};
