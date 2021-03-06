package com.example.backend.service.auth;

import com.example.backend.model.AuthenticationModel;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil {
    private final String jwtSecret = "jwtSecret";
    private final long jwtExpiration = 100 * 60 * 60 * 10;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }


    public String generateToken(AuthenticationModel authenticationModel) {
        Map<String, Object> claims = new HashMap<>();

        // basic stub for now; only 2 users. admin and reader corresponding to the supported roles...
        claims.put("role", authenticationModel.getUsername());
        return createToken(claims, authenticationModel.getUsername());
    }

    public String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + jwtExpiration)).signWith(SignatureAlgorithm.HS256, jwtSecret).compact();
    }

    public boolean validateToken(String token, String userName) {
        final String username = extractUsername(token);
        return (username.equals(userName)) && !isTokenExpired(token);
    }
}
