const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase text-white">
        {title}
      </h3>

      <ul className="space-y-3 text-sm text-zinc-400">
        {links.map((link) => (
          <li key={link}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks