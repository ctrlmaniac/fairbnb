package me.ctrlmaniac.fairbnb.repositories.appartamento;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.entities.appartamento.Camera;

public interface CameraRepo extends JpaRepository<Camera, String> {

}
