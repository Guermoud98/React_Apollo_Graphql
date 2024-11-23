import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={styles.navContainer}>
      <h1 style={styles.logo}>Gestion des comptes </h1>
      <div style={styles.links}>
      <Link to="/compte" style={styles.link}>Créer Compte</Link>
        <Link to="/transactions" style={styles.link}>Créer Transaction</Link>
        <Link to="/" style={styles.link}>Comptes</Link>
      </div>
    </div>
  );
};

const styles = {
  navContainer: {
    backgroundColor: '#1e2a34', // Fond bleu-gris sombre
    color: 'white',
    padding: '15px 30px', // Marge intérieure ajustée
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Ombre douce pour donner du relief
  },
  logo: {
    fontSize: '1.8rem', // Taille du logo agrandie
    fontWeight: 'bold',
    color: '#1abc9c', // Couleur du logo en vert turquoise
  },
  links: {
    display: 'flex',
    gap: '25px', // Espacement entre les liens
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease', // Transition fluide pour le changement de couleur
  },
  linkHover: {
    color: '#1abc9c', // Couleur au survol (vert turquoise pour cohérence)
  }
};

export default Navigation;
