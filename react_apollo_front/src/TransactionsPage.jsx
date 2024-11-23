import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_COMPTE_TRANSACTIONS = gql`
  query GetCompteTransactions($compteId: ID!) {
    transactionsByCompteId(compteId: $compteId) {
      id
      montant
      type
      dateTransaction
    }
  }
`;

const TransactionsPage = () => {
  const { compteId } = useParams();

  const { loading, error, data } = useQuery(GET_COMPTE_TRANSACTIONS, {
    variables: { compteId },
  });

  if (loading) return <p style={styles.loading}>Chargement des transactions...</p>;
  if (error) return <p style={styles.error}>Erreur: {error.message}</p>;

  const transactions = data.transactionsByCompteId;

  if (!transactions || transactions.length === 0) {
    return <p style={styles.noTransactions}>Aucune transaction trouvée pour ce compte.</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Transactions pour le compte ID: {compteId}</h2>
      <div style={styles.grid}>
        {transactions.map((transaction) => (
          <div key={transaction.id} style={styles.card}>
            <h3 style={styles.cardHeading}>Transaction ID: {transaction.id}</h3>
            <p><strong>Montant:</strong> {transaction.montant.toFixed(2)} DH</p>
            <p><strong>Type:</strong> {transaction.type}</p>
            <p><strong>Date:</strong> {new Date(transaction.dateTransaction).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212', // Fond plus foncé pour un contraste élevé
    color: '#e0e0e0', // Texte légèrement plus clair pour améliorer la lisibilité
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#e0e0e0', // Texte d'en-tête clair pour la visibilité
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Mise en page flexible avec colonnes dynamiques
    gap: '20px',
    padding: '20px', // Espace entre les cartes pour éviter l'encombrement
  },
  card: {
    backgroundColor: '#2c2c2c', // Fond des cartes légèrement plus clair que le container
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.6)', // Ombre plus marquée pour plus de profondeur
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    cursor: 'pointer', // Indication visuelle d'interactivité
  },
  cardHeading: {
    fontSize: '1.6rem',
    color: '#1abc9c', // Couleur vive pour le titre de la carte, pour attirer l'attention
    marginBottom: '10px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888', // Gris clair pour l'état de chargement
  },
  error: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#e57373', // Rouge clair pour signaler les erreurs de manière subtile
  },
  noTransactions: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#999', // Gris moyen pour l'absence de transactions
  },
};


export default TransactionsPage;
