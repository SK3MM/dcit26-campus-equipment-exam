import { Link } from 'react-router-dom'

function EquipmentCard({ item }) {
  const statusClass = item.available ? 'available' : 'muted'

  return (
    <article className="equipment-card">
      <div className="card-top">
        <h2>{item.name}</h2>
        <span className="badge">{item.category}</span>
      </div>

      <dl>
        <div>
          <dt>Location</dt>
          <dd>{item.location}</dd>
        </div>
        <div>
          <dt>Condition</dt>
          <dd>{item.condition}</dd>
        </div>
      </dl>

      <p className={`status ${statusClass}`}>
        {item.available ? 'Available' : 'In use'}
      </p>

      <Link className="text-link" to={`/equipment/${item.id}`}>
        View details
      </Link>
    </article>
  )
}

export default EquipmentCard