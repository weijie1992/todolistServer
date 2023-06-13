import Koa from 'koa'
import { TaskService } from '../services/task'

// Single taskService
export class Task {
  taskService: TaskService
  constructor() {
    console.log('🚀 ~ file: task.ts:7 ~ Task ~ constructor ~ constructor:')
    this.taskService = new TaskService()
  }

  getAllTask = async (ctx: Koa.Context) => {
    const results = await this.taskService.getAllTask()
    ctx.body = {
      success: true,
      results
    }
  }
}
