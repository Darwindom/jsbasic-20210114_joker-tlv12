/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const list = document.createElement("ul");

  friends.forEach(({firstName, lastName}) => {
    const item = document.createElement('li');
    item.innerHTML = `${firstName}${lastName}`;
    list.append(item);
  });
  
  return list;
}

