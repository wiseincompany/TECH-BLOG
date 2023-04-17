import Image from 'next/image'
import img from '../public/404.jpg'

export default function PageNotFound() {
  return (
    <div className="err" style={{ marginTop: '10%', textAlign: 'center' }}>
      <Image priority src={img} alt="error" width={500} height={500} />
    </div>
  )
}
