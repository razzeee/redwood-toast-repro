import { toast } from '@redwoodjs/web/toast'

const MyPagePage = () => {
  return (
    <>
      <div className="flex p-4">
        <button
          className="dark:bg-gray-500"
          onClick={() => toast.loading('Loading...')}
        >
          Show loading toast
        </button>
      </div>
    </>
  )
}

export default MyPagePage
