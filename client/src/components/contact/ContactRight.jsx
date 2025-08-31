import { MailIcon, Phone } from 'lucide-react'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'

const ContactRight = () => {
  return (
    <div className="flex flex-col gap-10 md:w-1/2 w-full">
    {/* Contact Details */}
    <div>
      <h5 className="text-neutral-400 uppercase text-xs mb-2">
        Contact Details
      </h5>
      <p className="mb-1 text-black flex  items-center gap-1"><Phone size={15}/> +92 319 7421574</p>
      <p className="mb-1 text-black flex items-center gap-1"> <MailIcon size={15}/> coderwithferry@gmail.com</p>
      <p className="text-black flex items-center gap-1"><IoLocationOutline size={15} />  Karachi, Pakistan</p>
    </div>

    {/* Business Info */}
    <div>
      <h5 className="text-neutral-400 uppercase text-xs mb-2">
        Business Info
      </h5>
      <p className="text-black">Farhan Yousfzai</p>
      <p className="text-black">Providing digital solutions worldwide</p>
    </div>
  </div>
  )
}

export default ContactRight
