import notifier from 'node-notifier'
import path from 'path'


type Notification = {
  title:string,
  message:string
}

const iconPath = path.join(__dirname, "../img/archLogo.png")

const notify = (notification: Notification) => {
  notifier.notify({
    title: notification.title,
    message: notification.message,
    icon: iconPath
  })
}

export type { Notification }
export { notify }
