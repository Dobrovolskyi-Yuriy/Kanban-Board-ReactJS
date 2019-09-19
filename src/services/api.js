import axios from 'axios';

const kanban = axios.create({
  baseURL: 'http://localhost:8089/api/'
});

export function updateCard(cardId, updatedCard) {
  return kanban.patch(`card/${cardId}`, updatedCard)
    .then(res => res.data);
}

export function addCard(newCard) {
  return kanban.post('card', newCard)
    .then(res => res.data);
}

export function deleteCard(cardId) {
  return kanban.delete(`card/${cardId}`)
    .then(res => res.data);
}

export function getColumns() {
  return kanban.get('column')
    .then(res => res.data);
}

export function getCards() {
  return kanban.get('card')
    .then(res => res.data);
}