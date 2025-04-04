import React from "react";

function Profile({ user }) {
  return (
    <div style={styles.page}>
      <h2>Profil</h2>
      {user ? (
        <div>
          <p><strong>Nom:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Message:</strong> {user.message}</p>
        </div>
      ) : (
        <p>Aucune information d'utilisateur trouvée.</p>
      )}
    </div>
  );
}

const styles = { page: { padding: "20px", textAlign: "center" } };

export default Profile;
