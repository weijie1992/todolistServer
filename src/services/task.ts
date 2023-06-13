import { DateTime } from 'luxon'

export class TaskService {
  async getAllTask() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: '1', title: 'Title test', created: DateTime.now().toISODate() || '', markdown: 'haha', html: '<p>haha</p>' },
          { id: '2', title: 'Title test2', created: DateTime.local().plus({ days: 1 }).toISODate() || '', markdown: '', html: '' },
          { id: '3', title: 'Title test3', created: DateTime.local().plus({ days: 7 }).toISODate() || '', markdown: '', html: '' }
        ])
      }, 2000)
    })
  }
}
