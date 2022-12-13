import { Toaster } from '@redwoodjs/web/dist/toast'

type FrameLayoutProps = {
  children?: React.ReactNode
}

const FrameLayout = ({ children }: FrameLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-black dark:text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            'bg-white text-black dark:bg-black dark:text-white rounded-2xl shadow-md',
        }}
        containerStyle={{
          top: 76,
          right: 24,
          bottom: 24,
          left: 24,
        }}
      />

      <>{children}</>
    </div>
  )
}

export default FrameLayout
